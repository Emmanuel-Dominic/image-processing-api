import express, { Express, Request, Response } from 'express';
import request from "supertest";
import app from '../index';

let server: Express;

beforeEach(() => {
    server = app;
});

describe("When an Image Processing endpoint is accessed.", () => {
    it('should be able to return status code of 200.', () => {
        request(server).get("http://localhost:3000/encenadaport.jpg", (err, res) => {
            expect(res.status).toBe(200);
        });
    });
    it('should be able to return an image name in the body.', () => {
        request(server).get("http://localhost:3000/encenadaport.jpg", (err, res) => {
            expect(res.body).toContain('encenadaport.jpg');
        });
    });
    it('should be able to return an error for a wrong image.', () => {
        request(server).get("http://localhost:3000/encenhadaport.jpg", (err, res) => {
            expect(res.body).toContain('Image resizing Failed or Image don\'t Exist');
        });
    });
});
