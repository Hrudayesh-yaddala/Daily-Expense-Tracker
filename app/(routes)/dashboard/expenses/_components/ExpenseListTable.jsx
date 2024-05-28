import { db } from '@/utils/dbConfig'
import { Expenses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner';
import { BsTrash3Fill } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function ExpenseListTable({expensesList,refreshData}) {

  const deleteExpense=async(expense)=>{
    const result=await db.delete(Expenses)
    .where(eq(Expenses.id,expense.id))
    .returning();

    if(result)
    {
      toast('Expense Deleted!');
      refreshData()
    }
  }
  return (
    <div className='mt-3'>
        <h2 className='font-bold text-lg'>Latest Expenses</h2>
        {/* <div className='grid grid-cols-4 bg-slate-200 p-2 mt-3'>
            <h2 className='font-bold'>Name</h2>
            <h2 className='font-bold'>Amount</h2>
            <h2 className='font-bold'>Date</h2>
            <h2 className='font-bold'>Action</h2>
        </div>
        {expensesList.map((expenses,index)=>(
             <div className='grid grid-cols-4 bg-slate-50 p-2'>
             <h2>{expenses.name}</h2>
             <h2>{expenses.amount}</h2>
             <h2>{expenses.createdAt}</h2>
             <h2>
                <Trash className='text-red-600 cursor-pointer'
                  onClick={()=>deleteExpense(expenses)}
                />
             </h2>
         </div>
        ))} */}
        <div className=' border border-black rounded-lg mt-4 drop-shadow-2xl'>
        <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead >Amount</TableHead>
          <TableHead >Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expensesList.map((expenses,index) => (
          <TableRow key={index}>
            <TableCell className="font-medium ">{expenses.name}</TableCell>
            <TableCell >{expenses.amount}</TableCell>
            <TableCell >{expenses.createdAt}</TableCell>
            <TableCell className=" text-center"><BsTrash3Fill onClick={()=>deleteExpense(expenses)} className=' text-center'/></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
        </div>
    </div>
  )
}

export default ExpenseListTable;






