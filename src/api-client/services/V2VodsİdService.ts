/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsİdService {
    /**
     * VoD file from database
     * @returns any OK
     * @throws ApiError
     */
    public static getV2Vods({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/vods/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
    /**
     * Delete specific VoD File
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2Vods({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/vods/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
