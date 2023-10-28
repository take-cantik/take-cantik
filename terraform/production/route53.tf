# ---------------------------
# Rooute53
# ---------------------------

# ホストゾーン
data "aws_route53_zone" "host" {
  name = var.domain_name
}

# レコードの追加
resource "aws_route53_record" "main_a_record" {
  zone_id = data.aws_route53_zone.host.id
  name    = var.domain_name
  type    = "A"

  alias {
    zone_id                = aws_cloudfront_distribution.web_cf.hosted_zone_id
    name                   = aws_cloudfront_distribution.web_cf.domain_name
    evaluate_target_health = false
  }
}