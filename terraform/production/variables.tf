# ---------------------------
# Variable
# ---------------------------

# AWSのIAMアクセスキー
variable "access_key" {
  type        = string
  description = "iam access key"
}

# AWSのIAMシークレットアクセスキー
variable "secret_key" {
  type        = string
  description = "iam secret access key"
}
