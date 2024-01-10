import type { NextApiRequest, NextApiResponse } from "next"
import { getMerchantOrderId } from "lib/mercadopago"

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { id, topic } = req.query   
    if (topic === "merchant_order") {
        const response = await getMerchantOrderId({ merchantOrderId: id as string | number })
        const orderStatus=response.order_status
        console.log(orderStatus)
        if(orderStatus === "paid"){
            res.send({message:"orden en estado paid"})
        }
    }
    res.send({ message: "no hay id" })
    return 
    
}
