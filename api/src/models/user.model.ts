import { prop, getModelForClass } from '@typegoose/typegoose'

class User {
  @prop()
  username: string

  @prop()
  usernameLower: string

  @prop()
  birthday: number

  @prop()
  password: string

  @prop({})
  email: string

  @prop({ index: true }) emailLower: string

  @prop() emailCode: string
  @prop() emailCodeSentAt: number

  @prop({ default: false }) emailVerified: boolean
  @prop({}) emailVerifiedAt: number

  @prop({ default: Date.now })
  lastForgotPassword: number

  @prop({ default: Date.now })
  createdAt: number

  @prop({ default: false })
  admin: boolean
}

export const UserModel = getModelForClass(User)