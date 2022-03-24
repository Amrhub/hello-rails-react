class CreateGreetingMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :greeting_messages do |t|
      t.string :message

      t.timestamps
    end
  end
end
