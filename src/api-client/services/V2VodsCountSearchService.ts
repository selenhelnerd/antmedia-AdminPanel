/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsCountSearchService {
    /**
     * Get the partial number of VoDs depending on the searched items
     * @returns any OK
     * @throws ApiError
     */
    public static getV2VodsCount({
        search,
        accept,
    }: {
        search: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/vods/count/{search}',
            path: {
                'search': search,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
