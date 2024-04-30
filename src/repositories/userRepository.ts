import User from '../models/userModel';
class UserRepository{
  async getUserByEmail(email:string) {
    return User.findOne({ email });
  }
  async createUser(userData:object) {
    return User.create(userData);
  }
  async deleteUser(id: string) {
    return User.findByIdAndDelete(id);
  }
  async getAllUsers(){
    return User.find();
  }
  async getUserById(id:string){
    return User.findById(id);
  }
  async updateUser(id: string, userData: { name: string; email: string; age: number }) {
    return User.findByIdAndUpdate(id, userData, { new: true });
  }
}
export default new UserRepository();