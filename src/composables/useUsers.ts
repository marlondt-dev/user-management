import { ref } from "vue";
import { userService } from "@/services/api";
import type {User} from '@/types/user'

export function useUsers() {
    const users = ref<User[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchUsers = async () => {
        loading.value = true
        error.value = null

        try {
            users.value = await userService.getUsers()
            
        } catch (e) {
            error.value = 'Error while trying to fetch users'  
        }finally {
            loading.value = false 
        }

    }

    const createUser = async (user: User) => {
        loading.value = true
        error.value = null

        try {
           await userService.createUser(user) 
        } catch (e) {
            error.value = 'Error while creating a new user'
            throw e
        }finally {
            loading.value = false
        }
    }

    const calculateAge = (birthDate: string): number => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    
    return age
  }

  return {
    users, 
    loading, 
    error,
    fetchUsers,
    createUser, 
    calculateAge,
    
  }
}