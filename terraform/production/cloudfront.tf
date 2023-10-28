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
