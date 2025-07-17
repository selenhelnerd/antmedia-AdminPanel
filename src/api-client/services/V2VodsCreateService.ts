/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsCreateService {
    /**
     * Upload external VoD file to Ant Media Server
     * @returns any OK
     * @throws ApiError
     */
    public static postV2VodsCreate({
        contentType,
        accept,
        name,
        formData,
    }: {
        contentType?: string,
        accept?: string,
        /**
         * (Required) the name of the VoD File
         */
        name?: string,
        formData?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/vods/create',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            query: {
                'name': name,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
