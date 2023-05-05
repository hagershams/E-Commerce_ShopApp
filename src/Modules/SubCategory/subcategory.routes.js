import express from 'express';
const SubCategoryRoutes = express.Router()
import * as SubCategoryControllers from './subcategory.controller.js'

SubCategoryRoutes.route('/').get(SubCategoryControllers.GetAllSubCategories)
.post(SubCategoryControllers.AddSubCategory)
SubCategoryRoutes.route('/:id').get(SubCategoryControllers.GetSubCategory)
.delete(SubCategoryControllers.DeleteSubCategory)
.put(SubCategoryControllers.UpdateSubCategory)

export default SubCategoryRoutes;