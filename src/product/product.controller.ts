import { Body, Controller, Get, Post, Put, Delete, Res, HttpStatus, Param, Query, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){

    }

    @Get('/')
    async getProduct(@Res() res){
        const products = await this.productService.getProducts()
        res.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:productID')
    async getProductById(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID)
        res.status(HttpStatus.OK).json({
            product
        })
    }

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product successfully created',
            product
        })
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID){
        const productDeleted = await this.productService.deleteProduct(productID) 
        if(!productDeleted){
            throw new NotFoundException('Product does not exist')
        }
        res.status(HttpStatus.OK).json({
            message: 'Product deleted successfully',
            productDeleted
        })
    }

    @Put('/update')
    async updateProduct(@Res() res, @Query('productID') productID, @Body() createProductDTO: CreateProductDTO){
        const productUpdated = await this.productService.updateProduct(productID, createProductDTO) 
        if(!productUpdated){
            throw new NotFoundException('Product does not exist')
        }
        res.status(HttpStatus.OK).json({
            message: 'Product updated successfully',
            productUpdated
        })
    }

}
