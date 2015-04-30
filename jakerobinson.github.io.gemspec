# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jakerobinson.github.io"
  spec.version       = "1.0.0"
  spec.authors       = ["jakerobinson"]
  spec.email         = ["jaker@geekafterfive.com"]
  spec.summary       = %q{"My Blog"}
  spec.description   = %q{"geekafterfive.com"}
  spec.homepage      = "http://geekafterfive.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")

  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "jekyll"
  spec.add_development_dependency "html-proofer"
end
