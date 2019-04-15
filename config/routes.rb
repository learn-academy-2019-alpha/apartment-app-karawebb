Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  get 'protected', to: 'pages#protected'
  get 'unprotected', to: 'pages#unprotected'

  root to: "pages#unprotected"
end
