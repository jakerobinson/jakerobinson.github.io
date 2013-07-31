# Jekyll Rake tasks

desc 'create new post or bit. args: type (post, bit), title, future (# of days)'
# rake new type=(page|post) future=0 title="New post title goes here" slug="slug-override-title"
task :new do
  require 'rubygems'
  require 'chronic'
  
  type = ENV["type"] || "post"
  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  slug = ENV["slug"] || title.gsub(' ','-').downcase

  if type == "page"
    TARGET_DIR = "_pages"
  elsif future.to_i < 3
    TARGET_DIR = "_posts"
  else
    TARGET_DIR = "_drafts"
  end

  if future.to_i.zero?
    filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.markdown"
  else
    stamp = Chronic.parse("in #{future} days").strftime('%Y-%m-%d')
    filename = "#{stamp}-#{slug}.markdown"
  end
  path = File.join(TARGET_DIR, filename)
  post = <<-HTML
--- 
layout: TYPE
title: "TITLE"
date: DATE
---

HTML
  post.gsub!('TITLE', title).gsub!('DATE', Time.new.to_s).gsub!('TYPE', type)
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new #{type} generated in #{path}"
  system "open -a sublime\\ text\\ 2 #{path}"
end