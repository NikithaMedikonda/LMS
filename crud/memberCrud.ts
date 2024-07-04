import { Members } from '../models/members';

const createMember = async (member:any) => {
    try {
      const newMember = await Members.create({member});
      console.log('member created',newMember);
    }catch(error) {
      console.error('error while creating member', error);
    }
};

const getMember = async (id: number) => {
    try {
      const member = await Members.findByPk(id);
      if (member)
         {console.table(member.toJSON());}
      else {
          console.log('member not found')
      }
    } catch (error){
        console.error('error finding member', error);
    }
};
const getAllMembers = async () => {
    try {
        const members=await Members.findAll();
        console.table(members.map((member:any)=>member.toJSON()));
    } catch(error) {
        console.error('Error reading members:', error); 
    } 
};

const updateMember = async(id: number,updatedData: object) =>{
    try{
        const member=await Members.findByPk(id);
        if(member){
            await member.update(updatedData);
        }
        else{
            console.log("member not Found");
        }
    }
    catch(error){
        console.log("Error fetching member:",error);
    }
}

const deleteMember = async (id:number) => {
    try{
        const member = await Members.findByPk(id);
        if (member) {
            await member.destroy();
            console.log('member deleted');
        }else {
            console.log('member not found');
        }
    } catch (error) {
      console.error('Error deleting member:', error);
    }
}

export {createMember, getAllMembers, getMember, updateMember, deleteMember}