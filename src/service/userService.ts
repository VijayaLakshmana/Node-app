
import userRepository from '../repositories/userRepository';
class UserService{
  async createUser(userData:{email:string}) {
    const existingUser = await userRepository.getUserByEmail(userData.email);
    if (existingUser) {
      return false;
    }
    return userRepository.createUser(userData);
  }
  async deleteUser(id: string) {
    const user = await userRepository.deleteUser(id);
    return user;
  }
  async getAllUsers(){
    const user:object=await userRepository.getAllUsers();
    return user;
  }
  async getUserById(id:string){
    const user=await userRepository.getUserById(id);
    return user;
  }
  async updateUser(id: string, userData: { name: string; email: string; age: number }) {
    const user = await userRepository.updateUser(id, userData);
    return user;
  }
}
export default new UserService();