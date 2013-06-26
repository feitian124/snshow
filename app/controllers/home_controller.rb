class HomeController < ApplicationController
  def index
    @users = User.all
  end
  def new_post

    @users = User.all
  end
end
