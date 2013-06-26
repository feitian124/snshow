# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :post do
    title "MyString"
    content "MyText"
    created_by "MyString"
    created_at "2013-06-26"
  end
end
