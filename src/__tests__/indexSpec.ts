// import resizeImage from './../utilities/index';
import { Application } from 'express';
import request from 'supertest';
import sharp from 'sharp';
import path from 'path';
import app from '../index';

describe('Tests Image Processing Project', () => {
    let server: Application;
    beforeEach(async () => {
        server = app;
    });

    describe('Test the home page endpoint if accessed.', () => {
        it('should be able to return status code of 200.', async () => {
            await request(server)
                .get('/', res => {
                    expect(res.status).toBe(200);
                })
                .catch(err => err);
        });

        it('should be able to return a message in the body.', async () => {
            await request(server)
                .get('/', res => {
                    expect(res.body).toContain('Welcome to the Image home page');
                })
                .catch(err => err);
        });
    });

    describe('Test the Image Processing endpoint if accessed.', () => {
        it('should be able to return status code of 200.', async () => {
            await request(server)
                .get('/api/images/?filename=encenadaport&width=400&height=400', res => {
                    expect(res.status).toBe(200);
                })
                .catch(err => err);
        });

        it('should be able to return an image name in the body.', async () => {
            await request(server)
                .get('/api/images/?filename=encenadaport&width=400&height=400', res => {
                    expect(res.body).toContain('encenadaport.jpg');
                })
                .catch(err => err);
        });

        it('should be able to return an error for a wrong image.', async () => {
            await request(server)
                .get('/api/images/?filename=encehnadaport&width=400&height=400', res => {
                    expect(res.body).toContain("Image File don't Exist!");
                })
                .catch(err => err);
        });
    });

    describe('Test sharp resizeImage function.', () => {
        let imagePath: any;
        beforeEach(() => {
            imagePath = path.resolve(__dirname, './../../public/images/encehnadaport.jpg');
        });

        it('should return a resized image', () => {
            const image = sharp(imagePath);
            const resizedImage = image.resize(200, 200);
            expect(resizedImage).toBeDefined();
        });
    });

    describe('Test the error handling page if accessed.', () => {
        it('should be able to return status code of 404.', async () => {
            await request(server)
                .get('/others', res => {
                    expect(res.status).toBe(404);
                })
                .catch(err => err);
        });
    });
});
