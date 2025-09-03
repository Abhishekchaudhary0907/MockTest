import express from 'express';

const router = express.Router();

router.get('/test',(req,res) => {
    res.status(200).json({message:'success'})
});

router.get('/home',AuthController.getHome);
router.post('/signup',AuthController.signup);
router.post('/login',AuthController.loginController);
router.get('/get-profile',AuthController.getController);


export default router;