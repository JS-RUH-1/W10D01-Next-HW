import dbConnect from '../../../utils/dbConnect';
import Planets from '../../../Planets';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const planets = await Planets.findById(id);

                if (!planets) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: planets });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PATCH':
            try {
                const planets = await Planets.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!planets) {
                    return res.status(400).json({ success: false });
                }
                const planet = await Planets.find({});   
                res.status(200).json({ success: true, data: planet });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedPlanets = await Planets.deleteOne({ _id: id });

                if (!deletedPlanets) {
                    return res.status(400).json({ success: false })
                }
                const planets = await Planets.find({});

                res.status(200).json({ success: true, data: planets });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}