export const BDUsers = [
    {
        id: "user-admin",
        firstName: "Stiven",
        lastName: "Giraldo",
        email: "admin@arteestilo.com",
        password: "123456",
        city: "Medellín",
        phone: "3001234567",
        role: "admin",
        favorites: [],
        cart: [],
        orders: [],
        addresses: [],
        paymentMethods: []
    },
    {
        id: "user-tester",
        firstName: "Maria",
        lastName: "Tester",
        email: "cliente@arteestilo.com",
        password: "123456",
        city: "Medellín",
        phone: "3005551122",
        role: "customer",
        favorites: [],
        cart: [],
        orders: [],
        addresses: [
            {
                id: "address-tester-main",
                label: "Principal",
                line1: "Calle 10 # 43E-28",
                city: "Medellín",
                region: "Colombia",
                primary: true
            }
        ],
        paymentMethods: [
            {
                id: "payment-tester-main",
                brand: "Visa",
                last4: "4821",
                expiry: "08/27"
            }
        ]
    }
]