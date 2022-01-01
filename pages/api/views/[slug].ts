import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const slug = req.query.slug.toString()

        if (req.method === 'POST') {
            const newOrUpdatedViews = await prisma.views.upsert({
                where: { slug },
                create: {
                    slug,
                },
                update: {
                    count: {
                        increment: 1,
                    },
                },
            })

            return res.status(200).json({
                count: newOrUpdatedViews.count.toString(),
            })
        }

        if (req.method === 'GET') {
            const views = await prisma.views.findUnique({
                where: {
                    slug,
                },
            })

            return res
                .status(200)
                .json({ count: views ? views.count.toString() : 0 })
        }
    } catch (e: unknown) {
        return res.status(500).json({ message: 'Unknown Error' })
    }
}
