class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.string :created_by
      t.date :created_at

      t.timestamps
    end
  end
end
