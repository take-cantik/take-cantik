# ---------------------------
# Variable
# ---------------------------

variable "project_name" {
  default     = "take-cantik-page"
  type        = string
  description = "name of project"
}

variable "env" {
  default     = "prd"
  type        = string
  description = "environment"
}

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

variable "domain_name" {
  default     = "take-cantik.com"
  type        = string
  description = "domain name"
}
