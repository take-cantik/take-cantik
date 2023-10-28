# ---------------------------
# Terraform
# ---------------------------

# AWSを使用
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# ---------------------------
# Provider
# ---------------------------

# 東京リージョンのプロバイダ
provider "aws" {
  region     = "ap-northeast-1"
  access_key = var.access_key
  secret_key = var.secret_key

  default_tags {
    tags = {
      Project = "TakeCantikPage"
      Env     = "production"
    }
  }
}

# バージニア北部リージョンのプロバイダ(ACM用)
provider "aws" {
  region     = "us-east-1"
  alias      = "virginia"
  access_key = var.access_key
  secret_key = var.secret_key

  default_tags {
    tags = {
      Project = "TakeCantikPage"
      Env     = "production"
    }
  }
}

# 自分のパブリックIP取得用
provider "http" {}
