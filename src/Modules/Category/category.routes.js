import express from 'express';
const CategoryRoutes = express.Router()
//import {GetAllCategories,AddCategory,GetCategory,DeleteCategory,UpdateCategory} from './category.controller.js'
import * as CategoryControllers from './category.controller.js'


//CategoryRoutes.route('/').get(GetAllCategories).post(AddCategory)
//CategoryRoutes.route('/:id').get(GetCategory).delete(DeleteCategory).put(UpdateCategory)

CategoryRoutes.route('/').get(CategoryControllers.GetAllCategories).post(CategoryControllers.AddCategory)
CategoryRoutes.route('/:id').get(CategoryControllers.GetCategory).delete(CategoryControllers.DeleteCategory)
.put(CategoryControllers.UpdateCategory)

export default CategoryRoutes;