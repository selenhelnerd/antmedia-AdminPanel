/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdTokensService {
    /**
     *  Removes all tokens related with requested stream
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsTokens({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/{id}/tokens',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
