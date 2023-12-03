provider "aws" {
  region = "us-east-1"  # substitua pela sua região AWS
}

#resource "aws_s3_bucket" "studio_elimar_farias" {
#    bucket        = "studio-elimar-farias"
#    force_destroy = true
#    acl           = "public-read"
#
#    website {
#        index_document = "index.html"  # Arquivo HTML padrão
#        error_document = "error.html"  # Arquivo de erro (opcional)
#    }
#
#    tags = {
#        Name = "StaticWebsiteBucket"
#    }
#}

resource "aws_s3_bucket" "studio_elimar_farias" {
    bucket        = "studio-elimar-farias"
    force_destroy = true

    website {
        index_document = "index.html"  # Arquivo HTML padrão
        error_document = "error.html"  # Arquivo de erro (opcional)
    }

    tags = {
        Name = "StaticWebsiteBucket"
    }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.studio_elimar_farias.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = ["s3:GetObject"]
        Resource  = ["${aws_s3_bucket.studio_elimar_farias.arn}/*"]
      },
    ]
  })
}

resource "null_resource" "sync_content" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = "npm run build && aws s3 sync ../build s3://${aws_s3_bucket.studio_elimar_farias.bucket}"
  }
}