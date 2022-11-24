import mongoose from 'mongoose'

const user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    google_auth_status: Boolean,
    instagram_profile_status: Boolean,
    twitter_profile_status: Boolean,
	instagram_username: {
		required: false,
		type: String,
	},
	instagram_user_id: {
		required: false,
		type: String,
	},
	instagram_user_auth_token_long_duration: {
		required: false,
		type: String,
	},
	istagram_user_auth_token_short_duration: {
		required: false,
		type: String,
	},
	instagram_user_auth_code: {
		required: false,
		type: String,
	},
})

mongoose.models = {}
const User = mongoose.model('user', user, 'users')

export default User
