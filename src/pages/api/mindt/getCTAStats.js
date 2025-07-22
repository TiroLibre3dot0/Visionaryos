import { db } from './firebaseAdmin_mindt.js';

export default async function getCTAStats(req, res) {
  try {
    const snapshot = await db.collection('ctaStats').get();

    const stats = {};
    snapshot.forEach((doc) => {
      stats[doc.id] = doc.data();
    });

    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    console.error("Errore fetch CTA Stats:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}
