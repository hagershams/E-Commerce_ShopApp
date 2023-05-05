import express from 'express';
const BrandRoutes = express.Router()
import * as BrandControllers from './brand.controller.js'
import { SinglePhoto } from '../../../Middleware/Utility/Photo/Photo.Uploader.js';
import {AuthenticationCheck} from '../../../Middleware/Auth/Authentication.js'
import {AuthorizationCheck} from '../../../Middleware/Auth/Authorization.js'


BrandRoutes.route('/')
.get(AuthenticationCheck,AuthorizationCheck('admin','user'),BrandControllers.GetAllBrands)
.post(SinglePhoto('Brands','Logo'),AuthenticationCheck,AuthorizationCheck('admin'),BrandControllers.AddBrand)

BrandRoutes.route('/:id')
.get(AuthenticationCheck,AuthorizationCheck('admin','user'),BrandControllers.GetBrand)
.delete(AuthenticationCheck,AuthorizationCheck('admin'),BrandControllers.DeleteBrand)
.patch(SinglePhoto('Brands','Logo'),AuthenticationCheck,AuthorizationCheck('admin'),BrandControllers.UpdateBrand)

export default BrandRoutes;