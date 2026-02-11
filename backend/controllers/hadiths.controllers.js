import hadithsServices from "../services/hadiths.services.js";
import catchAsync from "../utils/catchAsync.js";


export const get_hadiths = catchAsync(async (req , res) => {

    const hadiths = await hadithsServices.getAll();
    res.status(200).json({ success : true , hadiths : hadiths})

})

export const get_one_hadiths = catchAsync( async(req , res) => {

    const id = req.params.id;

    const hadith = await hadithsServices.getOne(id);
    res.status(200).json({success : true , hadith : hadith.all , today : hadith.today})


})