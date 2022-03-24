Rails.application.routes.draw do
  root 'static#index'
  get '*path', to: 'static#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  namespace :v1, defaults: { format: :json } do
    get 'random_message', to: 'messages#index'
  end
end
