class V1::MessagesController < ApplicationController
  def index
    @messages = GreetingMessage.all
    @message = @messages.sample
    render json: {
      message: @message.message
    }.to_json
  end
end