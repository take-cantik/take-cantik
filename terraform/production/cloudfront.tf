# ---------------------------
# CloudFront
# ---------------------------

resource "aws_cloudfront_distribution" "web_cf" {
  origin {
    domain_name              = aws_s3_bucket.hosting_s3.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.hosting_s3.bucket_regional_domain_name

    connection_attempts      = 3
    connection_timeout       = 10
    origin_access_control_id = aws_cloudfront_origin_access_control.web_cf_oac.id
  }

  aliases = [var.domain_name]

  enabled             = true
  is_ipv6_enabled     = false
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods          = ["GET", "HEAD"]
    cached_methods           = ["GET", "HEAD"]
    cache_policy_id          = data.aws_cloudfront_cache_policy.caching_optimazied.id
    compress                 = true
    target_origin_id         = aws_s3_bucket.hosting_s3.bucket_regional_domain_name
    viewer_protocol_policy   = "redirect-to-https"

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.web_cf_function_add_index_html.arn
    }
  }

  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 403
    response_code         = 403
    response_page_path    = "404/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = data.aws_acm_certificate.acm.arn
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }

  tags = {
    Name = "${var.project_name}-${var.env}-web-cf"
  }
}

resource "aws_cloudfront_origin_access_control" "web_cf_oac" {
  name                              = aws_s3_bucket.hosting_s3.bucket_regional_domain_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ---------------------------
# CloudFront Function
# ---------------------------

# URI 末尾に index.html を付ける Function
resource "aws_cloudfront_function" "web_cf_function_add_index_html" {
  name    = "${var.project_name}-${var.env}-web-cf-function-add-index-html"
  runtime = "cloudfront-js-1.0"
  publish = true

  code    = file("./src/add-index-html.js")
}

# ---------------------------
# CloudFront Data
# ---------------------------

data "aws_cloudfront_cache_policy" "caching_optimazied" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_origin_request_policy" "all_viewer" {
  name = "Managed-AllViewer"
}

data "aws_acm_certificate" "acm" {
  domain   = var.domain_name
  provider = aws.virginia
}
