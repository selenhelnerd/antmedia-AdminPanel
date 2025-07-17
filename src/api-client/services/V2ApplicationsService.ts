/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApplicationsService {
    /**
     * Gets the applications in the server. Returns the name of the applications in JSON format.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2Applications({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/applications',
            headers: {
                'Accept': accept,
            },
        });
    }
}
