import express from 'express';
const ProductRoutes = express.Router()
import * as ProductControllers from './product.controllers.js'
import { AuthenticationCheck } from '../../../Middleware/Auth/Authentication.js';
import { AuthorizationCheck } from '../../../Middleware/Auth/Authorization.js';
import { ArrayOfFields } from '../../../Middleware/Utility/Photo/Photo.Uploader.js';


ProductRoutes.route('/').get(AuthenticationCheck,AuthorizationCheck('admin','user'),ProductControllers.GetAllProducts)
.post(ArrayOfFields('Products',[{name:"CoverImage",maxCount:1},{name:"Images",maxCount:10}]),AuthenticationCheck,AuthorizationCheck('admin'),ProductControllers.AddProduct)

ProductRoutes.route('/:id')
.get(AuthenticationCheck,AuthorizationCheck('admin','user'),ProductControllers.GetProduct)
.delete(AuthenticationCheck,AuthorizationCheck('admin'),ProductControllers.DeleteProduct)
.patch(ArrayOfFields('Products',[{name:"CoverImage",maxCount:1},{name:"Images",maxCount:10}]),AuthenticationCheck,AuthorizationCheck('admin'),ProductControllers.UpdateProduct)

export default ProductRoutes;
