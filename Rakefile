
desc 'create new post' 
task :new do
  title = ENV["title"] || "New Title"
  slug = ENV["slug"] || title.gsub(' ','-').downcase

  filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.markdown"
  
  path = File.join('_posts', filename)
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
  puts "new post generated in #{path}"
  system "vim #{path}"
end
