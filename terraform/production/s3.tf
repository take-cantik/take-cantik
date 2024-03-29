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
    key = "404/index.html"
  }
}

# ブロックパブリックアクセス
resource "aws_s3_bucket_public_access_block" "hosting_block" {
  bucket             = aws_s3_bucket.hosting_s3.id

  block_public_acls  = true
  ignore_public_acls = true
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
        Action    = ["s3:GetObject","s3:GetObjectVersion"],
        Resource  = "${aws_s3_bucket.hosting_s3.arn}/*",
      },
    ]
  })
}
