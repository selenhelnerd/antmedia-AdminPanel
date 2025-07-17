/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsBulkService {
    /**
     * Delete bulk VoD Files based on Vod Id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2VodsBulk({
        contentType,
        accept,
    }: {
        contentType?: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/vods/bulk',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
        });
    }
}
