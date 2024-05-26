import type { NextApiRequest, NextApiResponse } from 'next';
import { getRecommendations } from '../../utils/recommendations';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (typeof userId !== 'string') {
    res.status(400).json({ error: 'Invalid userId' });
    return;
  }

  try {
    const recommendations = await getRecommendations(userId);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
    
  }
}
