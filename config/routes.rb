Rails.application.routes.draw do
  root 'static#index'

  namespace :v1, defaults: { format: :json } do
    get 'random_message', to: 'messages#index'
  end
end
