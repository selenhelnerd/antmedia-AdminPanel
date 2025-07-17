/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2LivenessService {
    /**
     * Returns the hostname to check liveness with HTTP type healthcheck.
     * @returns void
     * @throws ApiError
     */
    public static getV2Liveness(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/liveness',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
}
