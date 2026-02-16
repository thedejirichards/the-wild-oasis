import supabase from "./supabase"

export const getCabins =async()=> {
    
const { data, error } = await supabase
  .from('cabins')
  .select('*')
}