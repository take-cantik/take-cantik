# ---------------------------
# S3
# ---------------------------

# バケットの作成
resource "aws_s3_bucket" "hosting_s3" {
  bucket = "${var.project_name}-${var.env}-hosting-s3"

  tags = {
    Name = "${var.project_name}-${var.env}-hosting-s3"
  }
}

# 静的ホスティングの設定
resource "aws_s3_bucket_website_configuration" "hosting_config" {
  bucket = aws_s3_bucket.hosting_s3.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

# バケットポリシー
resource "aws_s3_bucket_policy" "hosting_policy" {
  bucket = aws_s3_bucket.hosting_s3.id

  # Cloudfrontからのみアクセスを許可
  policy = jsonencode({
    Version   = "2012-10-17",
    Id        = "PolicyForCloudFrontPrivateContent",
    Statement = [
      {
        Sid       = "CloudFrontAccess",
        Effect    = "Allow",
        Principal = {
          Service = "cloudfront.amazonaws.com"
        },
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.web_cf.arn
          }
        },
        Action    = "s3:GetObject",
        Resource = "${aws_s3_bucket.hosting_s3.arn}/*",
      },
    ]
  })
}
