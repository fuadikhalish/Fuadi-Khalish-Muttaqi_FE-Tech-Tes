const { defineStore } = Pinia

const useEmployeeStore = defineStore('employee', {
    state: () => ({
        employees: [
            { id: '001', name: 'Fuadi Khalish Muttaqi', role: 'Front end Developer', department: 'IT', status: 'Active' },
            { id: '002', name: 'Sarah', role: "Fuadi's wife", department: 'Design', status: 'On Leave' },
            { id: '003', name: 'Syafa', role: "Fuadi's daughter", department: 'Human Resources', status: 'Inactive' },
        ]
    }),
    actions: {
        addEmployee(employee) {
            const newId = String(this.employees.length + 1).padStart(3, '0')
            this.employees.push({
                id: newId,
                ...employee
            })
        },
        removeEmployee(id) {
            const index = this.employees.findIndex(emp => emp.id === id)
            if (index > -1) {
                this.employees.splice(index, 1)
            }
        },
        updateEmployee(id, updatedData) {
            const index = this.employees.findIndex(emp => emp.id === id)
            if (index > -1) {
                this.employees[index] = { ...this.employees[index], ...updatedData }
            }
        },
        getEmployeeById(id) {
            return this.employees.find(emp => emp.id === id)
        }
    }
})