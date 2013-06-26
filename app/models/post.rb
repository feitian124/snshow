class Post < ActiveRecord::Base
  attr_accessible :content, :created_at, :created_by, :title
end
