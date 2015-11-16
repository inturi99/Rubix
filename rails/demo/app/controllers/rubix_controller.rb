class RubixController < ApplicationController
  def index
    @response = {path: request.path,
                 data: {}}.to_json
  end
end
