/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdSubscribersSidService {
    /**
     * Delete specific subscriber from data store for selected stream
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsSubscribers({
        id,
        sid,
        accept,
    }: {
        id: string,
        sid: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/{id}/subscribers/{sid}',
            path: {
                'id': id,
                'sid': sid,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
